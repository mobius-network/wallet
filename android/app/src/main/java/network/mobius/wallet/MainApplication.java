package network.mobius.wallet;

import android.app.Application;

import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.apsl.versionnumber.RNVersionNumberPackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.horcrux.svg.SvgPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.microsoft.codepush.react.CodePush;
import com.oblador.keychain.KeychainPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smixx.fabric.FabricPackage;

import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import org.reactnative.camera.RNCameraPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.asList(
          new MainReactPackage(),
          new CodePush(
              BuildConfig.CODE_PUSH_ANDROID_KEY,
              getApplicationContext(),
              getUseDeveloperSupport()
          ),
          new FabricPackage(),
          new KeychainPackage(),
          new LinearGradientPackage(),
          new RandomBytesPackage(),
          new RNCameraPackage(),
          new RNDeviceInfo(),
          new RNLanguagesPackage(),
          new RNVersionNumberPackage(),
          new SplashScreenReactPackage(),
          new SvgPackage(),
          new VectorIconsPackage()
      );
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(this, new Crashlytics());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
