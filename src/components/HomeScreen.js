import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import Colors from '../assets/colors/Colors'
import Feather from 'react-native-vector-icons/Feather'
import CategoriesData from '../assets/data/CategoriesData'
import PopularData from '../assets/data/PopularData'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Image
                        style={styles.profileImage}
                        source={require('../assets/images/profile.png')}
                    />
                    <Feather name='menu' size={24} />
                </View>

                {/* Titles */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleSubtitle}>Food</Text>
                    <Text style={styles.titlesTitle}>Delivery</Text>
                </View>

                {/* Search */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={16} />
                    <View style={styles.search}>
                        <Text style={styles.searchText}>Search...</Text>
                    </View>
                </View>

                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={CategoriesData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <View style={[styles.categoryItemWrapper, {
                                        backgroundColor: item.selected ? Colors.primary : Colors.white,
                                    }]}>
                                        <Image source={item.image} style={styles.categoryItemImage} />

                                        <Text style={styles.categoryItemText}>{item.title}</Text>

                                        <View style={[styles.categorySelectWrapper, {
                                            backgroundColor: item.selected ? Colors.white : Colors.secondary
                                        }]}>
                                            <Feather
                                                name='chevron-right'
                                                size={20}
                                                style={styles.catergorySelectIcon} />
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                {/* Popular */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>

                    <View style={{ marginTop: 10 }}>
                        <FlatList
                            data={PopularData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{item:item})}>
                                        <View style={[styles.popularCardWrapper,{marginTop: item.id == 1 ? 10 : 20,}]}>
                                            <View style={styles.popularCardLeft}>
                                                <View style={styles.popularTopWrapper}>
                                                    <FontAwesome5
                                                        name='crown'
                                                        size={12}
                                                        color={Colors.primary} />
                                                    <Text style={styles.popularTopText}>top of the week</Text>
                                                </View>

                                                <View style={styles.popularTitleWrapper}>
                                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                                    <Text style={styles.popularTitlesWeight}>Weight: {item.weight}</Text>
                                                </View>

                                                <View style={styles.popularCardBottom}>
                                                    <View style={styles.addPizzaButton}>
                                                        <Feather name='plus' size={15} />
                                                    </View>

                                                    <View style={styles.ratingWrapper}>
                                                        <MaterialCommunityIcons name='star' size={15} />
                                                        <Text
                                                            style={{
                                                                marginLeft: 5,
                                                                fontSize: 15,
                                                                fontFamily:'Montserrat-SemiBold'
                                                            }}>
                                                            {item.rating}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={styles.popularCardRight}>
                                                <Image source={item.image} style={styles.popularCardImage} />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titleSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: Colors.textDark,
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: Colors.textDark,
    },
    searchWrapper: {
        marginTop: 36,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        marginLeft: 10,
        borderBottomColor: Colors.textLight,
        borderBottomWidth: 2,
        width: 309,
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: Colors.textLight,
    },
    categoriesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: Colors.textDark,
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        marginTop: 24,
        marginHorizontal: 20,
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
    categoryItemText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: 26,
        height: 26,
        marginBottom: 20,
        borderRadius: 26,
    },
    catergorySelectIcon: {
        alignSelf: 'center',
        color: Colors.black,
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWrapper: {
        borderRadius: 25,
        paddingHorizontal:20,
        flexDirection:'row',
        backgroundColor: Colors.white,
        overflow:'hidden',
        shadowColor:Colors.black,
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    popularTopText: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        marginLeft: 10,
    },
    popularTitleWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
    },
    popularTitlesWeight: {
        color: Colors.textLight,
        fontSize: 12,
        fontFamily:'Monteserrat-Medium'
    },
    popularCardBottom: {
        flexDirection: 'row',
        marginLeft: -20,
        marginTop: 10,
        alignItems: 'center',
    },
    addPizzaButton: {
        backgroundColor: Colors.primary,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingVertical: 20,
        paddingHorizontal: 40,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    popularCardRight:{
        marginTop:20,
        paddingHorizontal:30,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode:'contain', 
    },
})
