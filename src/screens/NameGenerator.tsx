import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

function GetName(props: any) {
    return(
        <TextInput 
            {...props}
            autoFocus={true}
            multiline={false}
            maxLength={30}
            autoCapitalize={'characters'}
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
            placeholder = {'Nome completo'.toUpperCase()}
        />
    );
}

function GetLastPhoneDigit(props: any) {
    return(<TextInput 
        {...props}
        multiline={false}
        autoFocus={true}
        maxLength={1}
        keyboardType={'numeric'}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        placeholder = {'Ultimo digito do seu telefone'.toUpperCase()}
    />
    );
}
function GetBornDay(props: any) {
    return(<TextInput 
        {...props}
        autoFocus={true}
        multiline={false}
        maxLength={2}
        keyboardType={'numeric'}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        placeholder = {'Dia de nascimento'.toUpperCase()}
    />
    );
}
function GetFirstLtrSurName(props: any) {
    return(<TextInput 
        {...props}
        autoFocus={true}
        multiline={false}
        maxLength={1}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        placeholder = {'Primeira letra do seu último sobrenome'.toUpperCase()}
    />
    );
}

function calculate(name: String, sur: String, phone: String, day: String) {
    const length = name.replace(" ", "").replace(".", "").replace(",", "").length
    const numOfName =  length != 0 ? length : ''

    const calculus = phone + numOfName.toString() + day + "-" + sur
    return calculus;
}

function ShowName(content: boolean) {
    content = true
    //return 
}

export default function NameGenerator(this: any) {
    const [text, onChangeName] = React.useState('')
    const [sur, onChangeSur] = React.useState('')
    const [phone, onChangePhone] = React.useState('')
    const [day, onChangeDay] = React.useState('')
    let [content] = React.useState('')

        return (
            <View style={{alignContent:'center', paddingTop: 150, paddingStart: 30}}>
                <View style={{alignContent:'center'}}>
                    <GetLastPhoneDigit
                        value={phone}
                        onChangeText = {(val: any) => onChangePhone(val)}
                    />
                    <GetName
                        value={text.replace(".", "").replace(",", "")}
                        onChangeText = {(val: any) => onChangeName(val)}
                    />
                    
                    <GetBornDay
                        value={day}
                        onChangeText = {(val: any) => onChangeDay(val)}
                    />
                    <GetFirstLtrSurName
                        value={sur.replace(".", "").replace(",", "")}
                        onChangeText = {(val: any) => onChangeSur(val)}
                    />
                </View>
                <View style={{flexDirection: 'row', alignContent:'center', paddingTop: 30, paddingStart:12}}>
                    <Text style={{fontSize: 30}}>Seu nome: </Text>
                    <TextInput style={{fontSize: 30, borderBottomWidth:.5}}
                    autoFocus={true} selectTextOnFocus={true}>{calculate(text, sur, phone, day)}</TextInput>
                </View>
                
            </View>
        )
}
