## Tech Challenge 1

This assignment, the first in a series, is designed to allow the developer to become familiarized with the tools necessary for development on a mobile platform.  This assignment can be done for iOS, Android, mobile web, or any combination thereof. 

### The application must do the following:
* If the application is a native application is should conform to the Human Interface Guidelines (HIG) for the target device.
* Run and display a page displaying the words ‘Hello World’ centered on the top of the page and contain a button, centered half-way down the page.  The button should readily appear to be a button to the user.
  * For mobile web, the page should have a fixed height and should not be scrollable.
* When the user presses the button the application should display a second page.
* The second page must contain a list of all of the date/times that the application was run.  
* From the list page the user must be able to navigate back to the first page in a manner that conforms to best practices for the platform on which it is running.
* The list must be sorted by start date/time in ascending order.
* The display of the date/time should be in the format of the current locale of the device.
* The application must not crash or leak memory.
* The application must be deployed to a physical device.
* If a native application is developed it must have a custom icon.
* For native applications, it must operate correctly when the phone is in airplane mode.
* All storage of data must occur on the phone.

### 2.  Assignment Objectives

When completed the student should have an understanding of the following concepts:
* SDK installation
* Software installation on the target device.
* Basic application structure
* Application startup
* Application view display
* View transitions
* Table views
* Basic local storage
* Basic date formatting

### 3.  Recommended Approach

#### 3.1.  iOS
* See Jack Cox for a developer account on the Apple developer portal.  This is required to enable loading the application on a hardware device.
* Web resources:
  * https://developer.apple.com/library/ios/navigation/#section=Resource%20Types&topic=Getting%20Started
  * https://developer.apple.com/library/ios/referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343 
  * https://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html%23//apple_ref/doc/uid/TP40006556
  * https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/ 
* Required Tools:
  * Xcode 6+
  * Mac with 10.10
* Suggested APIs
  * NSUserDefaults
  * UITableView and UITableViewController
  * UINavigationController
* CapTech Resources
  * Mark Broski
  * Jonathan Tang
  * John Morrison

#### 3.2.  Android
* Web resources
  * http://developer.android.com/index.html
  * http://developer.android.com/sdk/index.html
  * http://developer.android.com/about/index.html 
  * http://developer.android.com/guide/components/fundamentals.html 
  * http://developer.android.com/guide/topics/data/data-storage.html
  * http://developer.android.com/samples/index.html 
  * http://developer.android.com/guide/topics/ui/index.html
  * http://developer.android.com/training/index.html
  * http://developer.android.com/training/basics/activity-lifecycle/index.html 
  * http://developer.android.com/training/implementing-navigation/index.html 
* Required Tools
  * Android ADK
  * Android Studio 1.0+ 
  * Gradle
  * Mac or Windows PC
* CapTech Resources
  * Antoine Campbell
  * Jairo Vazquez

#### 3.3.  Mobile Web / Responsive Site
* Web resources
  * Angular JS (https://angularjs.org/)
  * Bootstrap CSS (http://getbootstrap.com/css/)
* Required Tools
  * Web Browser
  * Mobile Device or Simulator/Emulator
* CapTech Resources
  * Josh Stickles
  * Matt Kesler
#### 3.4.  Universal Windows Platform (UWP)
* Web resources
  * https://dev.windows.com/en-us/ 
  * https://msdn.microsoft.com/en-US/library/windows/apps/windows.ui.xaml.controls.aspx 
  * https://msdn.microsoft.com/en-US/ 
  * MVVM Frameworks
 * http://mvvmlight.codeplex.com/ 
 * https://pnpmvvm.codeplex.com/ 
* Required Tools
  * Windows 10+
  * Visual Studio 2015+ with UWP SDK
  * Windows 10 Mobile Emulators (optional)
* CapTech Resources
  * John Nein
  * Nicholas Cipollina

#### 4.  Deliverables
An application that meets the above requirements running on the target mobile device is required for completion of this assignment.
