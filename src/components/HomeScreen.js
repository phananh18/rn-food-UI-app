import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import Colors from '../assets/colors/Colors'
import Feather from 'react-native-vector-icons/Feather'
import CategoriesData from '../assets/data/CategoriesData'
import PopularData from '../assets/data/PopularData'


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.profileImage}
                    source={require('../assets/images/profile.png')}
                />
                {/* Icon */}
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
                                            size={8}
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
                <View style={styles.popularListWrapper}>
                        <FlatList 
                            data={PopularData}
                            keyExtractor={item=>item.id}
                            renderItem={({item})=>{
                                return(
                                    <View>
                                        <Text>{item.title}</Text>
                                    </View>
                                )
                            }}
                        />
                </View>
            </View>

        </View>
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
        fontWeight:'bold',
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
        fontWeight:'bold',
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
    },
    popularWrapper:{
        paddingHorizontal:20,
    },
    popularTitle:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        fontWeight:'bold',
    }
})
