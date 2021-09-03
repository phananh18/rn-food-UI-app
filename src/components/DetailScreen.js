import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../assets/colors/Colors'

const DetailScreen = ({ route, navigation }) => {
    const { item } = route.params;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentInsetAdjustmentBehavior='automatic'>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name='chevron-left' size={15} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name='star' size={12} color={Colors.white} />
                    </View>
                </View>

                {/* Title */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                {/* Price */}
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>${item.price}</Text>
                </View>

                {/* Pizza info */}
                <View style={styles.infoWrapper}>
                    <View style={styles.infoLeftWrapper}>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>Size</Text>
                            <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}"</Text>
                        </View>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>Crust</Text>
                            <Text style={styles.infoItemText}>{item.crust}</Text>
                        </View>
                        <View style={styles.infoItemWrapper}>
                            <Text style={styles.infoItemTitle}>Delivery in</Text>
                            <Text style={styles.infoItemText}>{item.deliveryTime}</Text>
                        </View>
                    </View>

                    <View>
                        <Image source={item.image} style={styles.infoImage} />
                    </View>
                </View>

                {/* Ingredients */}
                <View style={styles.ingredientsWrapper}>
                    <Text style={styles.ingredientsTitle}>Ingredients</Text>

                    <View style={[styles.ingredientsListWrapper,{marginRight:item.id==1?10:20}]}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={item.ingredients}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={[styles.ingredientsItemWrapper,{marginLeft:item.id == 1 ? 20:15}]}>
                                        <Image source={item.image} style={styles.ingredientsImage} />
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                {/* Place an order */}
                <TouchableOpacity onPress={()=>alert('Your order has been placed!!!')}>
                    <View style={styles.orderWrapper}>
                            <Text style={styles.orderText}>Place an order</Text>
                            <Feather name='chevron-right' size={20} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeft: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.textLight,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRight: {
        backgroundColor: Colors.primary,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    titleWrapper: {
        marginTop: 30,
        marginLeft: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        width: '50%',
    },
    priceWrapper: {
        marginTop: 20,
        marginLeft: 20,
    },
    price: {
        fontSize: 32,
        color: Colors.price,
        fontWeight: 'bold'
    },
    infoWrapper: {
        flexDirection: 'row',
        marginTop:20,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    infoLeftWrapper: {
        padding: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,
    },
    infoItemTitle: {
        fontSize: 14,
        color: Colors.textLight,
    },
    infoItemText: {
        fontSize: 16,
        color: Colors.textDark,
        fontWeight: 'bold'
    },
    infoImage: {
        resizeMode: 'contain',
        marginLeft: 40,
    },
    ingredientsWrapper: {
        marginTop: 10,
    },
    ingredientsTitle: {
        paddingHorizontal:20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    ingredientsListWrapper: {
        paddingVertical:20,
    },
    ingredientsItemWrapper: {
        backgroundColor:Colors.white,
        borderRadius:15,
        marginRight:15,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:Colors.black,
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
    },
    ingredientsImage: {
       resizeMode:'contain',
    },
    orderWrapper:{
        backgroundColor:Colors.primary,
        borderRadius:50,
        marginTop:10,
        paddingVertical:25,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    orderText:{
        fontWeight:'bold',
        fontSize:16,
    }
})
