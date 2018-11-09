# Cancel builds with [skip ci] as AppCenter's Build Machines don't currently do this.
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

echo "[Mobius RN] Commit Message: $COMMIT_MESSAGE"
echo "[Mobius RN] App Center App ID: $APPCENTER_APP_ID"

if [[ $COMMIT_MESSAGE = *"[skip ci]"* ]]; then
  echo "[Mobius RN] Skipping this build..."
  curl -X PATCH "https://api.appcenter.ms/v0.1/apps/$APPCENTER_APP_ID/builds/$APPCENTER_BUILD_ID" -H "accept: application/json" -H "X-API-Token: $APPCENTER_API_KEY" -H "Content-Type: application/json" -d "{ \"status\": \"cancelling\" }"
else
  echo "[Mobius RN] This build is valid, not skipping."
fi
