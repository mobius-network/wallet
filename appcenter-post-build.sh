# On iOS builds do the following
if [ ! -z "$APPCENTER_XCODE_PROJECT" ]; then
  echo "[Mobius RN] Tagging iOS version and commit to GitHub"
  # pushd ios; bundle exec fastlane tag_version; popd
else
  echo "[Mobius RN] Tagging Android version and commit to GitHub"
  # pushd android; bundle exec fastlane tag_version; popd
fi

echo "[Mobius RN] Completed"
