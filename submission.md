# Lab 3SA04 - ReactNative

# 1. Tab navigation

* `Tab Navigation` นี้เป็นการเพิ่ม Tab Menu ของ Application ก่อนที่จะเริ่มทำเราจะต้องติดตั้ง Bottom Tab ใน Command Prompt (รันใน Administrator) ก่อน โดยใช้คำสั่งดังนี้

    ```js
    >> npm install @react-navigation/bottom-tabs
    >> yarn add @react-navigation/bottom-tabs
    ```
# Tabs.js

* ```js
  >> import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  ```

  * เป็นการ import ตัว `createBottomTabNavigation` เข้าในตัวไฟล์

* หลังจากนั้นให้ประกาศตัวแปรที่ชื่อว่า `Tab` 
  ```js
  const Tab = createBottomTabNavigator();
  ```

* ```js
  <Tab.Navigator>
    <Tab.Screen name="Home" component={ZipCodeScreen}/>
    <Tab.Screen name="Weather" component={WeatherScreen}/>
  </Tab.Navigator>
  ```
    * เป็นการกำหนดว่า มีอะไรบ้างใน Bottom Tabs และในแต่ละหน้านั้นโยงไปในส่วนไหนของหน้า screen บ้าง

* ```js
  <Tab.Navigator
    tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 20,
                    height: 70,
                }}}>
  </Tab.Navigator>
  ```
  * เมื่อเพิ่มว่ามี Tab อะไรเข้าไปแล้ว ในส่วนนี้จะเป็นการกำหนด option ของ tab bar ว่าต้องการให้ tab bar มีลักษณะอย่างไรในที่นี้ จะให้ tab bar นี้มีลักษณะดังนี้
    
    1. `position: 'absolute'` => เป็นการจัดตำแหน่งของ tab bar ให้มีตำแหน่งที่มันแน่นอน ไม่เคลื่อไปไหน
    2. `bottom: 25` => เป็นการจัดให้ tab bar ขึ้นมาสูงจากขอบล่างเท่าไหร่ในมรานี้ให้ขึ้นมาจากขอบ เท่ากับ 25
    3. `left: 20, right: 20` => จะเหมือนกับข้อ 2 คือจัด tab bar ให้ไปทางซ้ายและ ขวา อย่างละ 20
    4. `elevation: 0` เป็นการสะท้อนเงาของ tab bar
    5. `backgroundColor: '#ffffff'` => ให้มีสีของ tab bar เป็นสีขาว
    6. `borderRadius: 20` => เป็นการขอบของ tab bar มีส่วนโค้งมน
    7.  `height: 70` => ความสูงของ tab bar 

* ```js
  const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
  })
  ```
  * shadow นี้จะเป็นรายละเอียดของเงาใน tab bar 
    
    1. `shadowColor: '#7F5DF0'` => สีของเงา
    2. `shadowOffset: {width: 0, height: 10,}` => กำหนดความกว้างและความสูงของเงา
    3. `shadowOpacity: 0.25` => ตัวควบคุมเงาว่าจะให้มีการกระจายเงาเป็นยังไง
    4. `shadowRadius: 3.5` => ความโค้งของเงา 
    5. `elevation: 5` => การสะท้อนของเงา

  * หลังจากกหนดเงาแล้วให้ไปใส่คำสั่ง `...styles.shadow` ใน `tabBarOptions` เพื่อเป็นการกำหนดเงาให้กับตัว tab bar
    ```js
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
    ```

* ส่วนต่อไปเป็นส่วนของ Icon ใน Tab bar เพิ่ม option เข้าไป ใน Tab.Screen
        
    * เพิ่มการจัดวางของ Icon 
        ```js
        <Tab.Screen
            name="Home"
            component={ZipCodeScreen}
            options={{
            tabBarIcon: ({ focused }) => (
                <View
                style={{ alignItems: "center", justifyContent: "center", top: 5 }}
        >
        </View>
        ```
        * `alignItems: 'center', justifyContent: "center", top: 5` => เป็นการกำหนดตำแหน่งในแนวนอนและแนวตั้งตามลำดับ ในส่วนของ top นั้นจะเป็นการจัดว่าให้สูงกว่า ขอบของตัว tab bar นั้นเท่าไหร่

    * เพิ่มรูป Icon
        ```js
        <Image
            source={require("../image/icon/home.png")}
            resizeMode="contain"
            style={{
                top: -3,
                width: 24,
                height: 24,
                tintColor: focused ? "#e32f45" : "#748c94",
            }}
        />
        ```
        * การเพิ่มรูปใช้คำสั่งว่า => `source={require('../image/icon/weather.png')`
        * ใน style นั้น `tintColor` เมื่อ กด Icon นั้น จะเป็นสีแดงออกชมพู ส่วน Icon ที่ไม่มีการกดเข้าไปนั้นจะเป็นสีเทา

    * เพิ่ม text ของ Icon หรือชื่อ Icon
        ```js
        <Text
            style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
        >WEATHER</Text>
        ```
        * การตั้งค่าของชื่อ Icon ก็เหมือนการตั้งค่าของ Icon คือกดไปจะเปลี่ยนเป็นสีแดงชมพู ส่วนที่ไม่กดจะเป็นสีเทา และตั้งค่า `fontsize` เพิ่มมาให้มีขนาดตัวอักษรเท่ากับ 12

* ในส่วนของ icon ส่วนต่อไปนั้น จะทำการตั้งค่าเหมือนกัย HOME เลย
        


        
            
        


