import React, { Component } from 'react'
import { Text, View, TextInput, Button, Clipboard } from 'react-native'

function ConvertedTextInput(props:any) {
    return (<TextInput 
        {...props}
        multiline={true}
        numberOfLines={3}
        borderLeftWidth={1}
        borderRightWidth={1}
        borderTopWidth={1}
        autoFocus={true}
        borderBottomWidth={1}
        textAlignVertical={'top'}
        style={{width: 300, height: 80}}
    />)
}

export default class GenerateText extends Component {
    constructor(props:any) {
      super(props)
    
      this.state = {
         text: '',
         clipboard: '',
         finalText:''
      };
    };
    
    writeToClipboard = async () => {
        let final = ''
        if (this.state.text != "") {
            for (let t of this.state.text) {
                final = final.concat(t, " ").toUpperCase()
            }

            this.setState({finalText: final.toUpperCase()})
            await Clipboard.setString(final);
        }
      };

      render() {
        return (
                <View style={{alignContent:'center', paddingTop: 150, paddingStart: 30}}>
                    <View style={{alignContent:'center'}}>
                    <Text>B O T A   O   T E X T O   E   V E J A   A   M A G I C A</Text>
                    <ConvertedTextInput value ={this.state.text.toLowerCase()} onChangeText ={(text) => this.setState({text})} placeholder ={'T e x t o'}/>
                    <Text> </Text>
                    <Text>A   M A G I C A:</Text>
                    <ConvertedTextInput editable ={false} value ={this.state.finalText} placeholder ={'T E X T O'} />
                    </View>
                <View style={{width: 300}}>
                    <Button
                    onPress={this.writeToClipboard}
                    title="G E R A R   E   C O P I A R"
                    />
                </View>
            </View>   
        );
      }
    }

function TextGenerator () {
    const [text, onChangeText] = React.useState('')
        return (
            <View style={{alignContent:'center', paddingTop: 150, paddingStart: 30}}>
                <View style={{alignContent:'center'}}>
                    <Text>B O T A   O   T E X T O   E   V E J A   A   M A G I C A</Text>
                    <ConvertedTextInput value ={text.toUpperCase()} onChangeText ={val => onChangeText(val + " ")} placeholder ={'T E X T O'} />
                </View>
                <View style={{width: 300}}>
                
                </View>
            </View>
        )
}
