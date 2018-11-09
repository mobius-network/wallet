COMMIT_MESSAGE=$(git log -1 --pretty=%B)
COMMIT_HASH="$BUILD_SOURCEVERSION"
LAST_ANDROID=$(git log --grep='\[release android\]' -1 | grep -o -E -e "[0-9a-f]{40}")
LAST_IOS=$(git log --grep='\[release ios\]' -1 | grep -o -E -e "[0-9a-f]{40}")

if [[ "$LAST_ANDROID" == "" ]]; then
  echo "[Mobius RN] Warning: No previous [Android] build"
  LAST_ANDROID=$(git log --max-parents=0 HEAD | grep -o -E -e "[0-9a-f]{40}")
fi

if [[ "$LAST_IOS" == "" ]]; then
  echo "[Mobius RN] Warning: No previous [iOS] build"
  LAST_IOS=$(git log --max-parents=0 HEAD | grep -o -E -e "[0-9a-f]{40}")
fi

TRIGGER_ANDROID=$(git rev-list $LAST_ANDROID..$COMMIT_HASH | xargs -L1 git diff-tree --no-commit-id --name-only -r | grep "^android")
TRIGGER_IOS=$(git rev-list $LAST_IOS..$COMMIT_HASH | xargs -L1 git diff-tree --no-commit-id --name-only -r | grep "^ios")

if [ ! -z "$GOOGLE_SERVICES_JSON" ]; then
  echo $GOOGLE_SERVICES_JSON | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json"
fi

if [ ! -z "$GOOGLE_SERVICES_PLIST" ]; then
  echo $GOOGLE_SERVICES_PLIST | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/ios/MobiusMobileWallet/GoogleService-Info.plist"
fi

generate_dotenv() {
    echo "Generating ${2}..."
    for KEYVAL in $(cat "$1" | egrep "^[A-Za-z]+"); do
      KEY=${KEYVAL%=*}
      VAL=${!KEY:-"${KEYVAL#*=}"}
      echo "$KEY=$(printf '%s\n' "${VAL}")" >> "$APPCENTER_SOURCE_DIRECTORY/${2}"
    done
}

generate_dotenv ".env.sample" ".env"
generate_dotenv ".env.build.sample" ".env.build.production"

echo "[Mobius RN] Identifying selected node version..."
node --version
which node

echo "[Mobius RN] Build execution environment:"
for key in ${!APPCENTER*} ${!BUILD*} ${!MOBILE*} ${!SYSTEM*}; do
  echo "  ${key}: ${!key}"
done

