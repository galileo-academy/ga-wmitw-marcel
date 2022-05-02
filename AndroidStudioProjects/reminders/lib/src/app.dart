import 'package:flutter/material.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';
import '../local_imports.dart';

/// The main widget.
class AppRoot extends StatefulWidget {
  const AppRoot({Key? key}) : super(key: key);
  @override
  State<AppRoot> createState() => _AppRootState();
}

/// The main widget state.
class _AppRootState extends State<AppRoot> {
  /// Whether dark mode is enabled.
  bool isDarkModeEnabled = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      theme: light,
      darkTheme: dark,

      themeMode: isDarkModeEnabled ? ThemeMode.dark : ThemeMode.light,

      home: AnimatedSplashScreen (
        duration: 1000,
        splash: 'assets/splash/splash.png',
        nextScreen: HomeScreen(),
        splashTransition: SplashTransition.fadeTransition,
        splashIconSize: double.infinity,
        backgroundColor: Color(0xff00C9FF),
      ),
      onGenerateRoute: (RouteSettings routeSettings) {
        return MaterialPageRoute<void>(
            settings: routeSettings,
            builder: (BuildContext context) {
              switch (routeSettings.name) {
                case HomeScreen.routeName:
                  return const HomeScreen();
                case OpleidingScreen.routeName:
                  return const OpleidingScreen();
                case WerkScreen.routeName:
                  return const WerkScreen();
                case HobbiesScreen.routeName:
                  return const HobbiesScreen();
                default:
                  return const HomeScreen();
              }
            });
      },
    );
  }

  /// Called when the state (day / night) has changed.
  void onStateChanged(bool isDarkModeEnabled) {
    setState(() {
      this.isDarkModeEnabled = isDarkModeEnabled;
    });
  }
}
