import React, { Component } from 'react'
import { Text, View, TextInput, Button, Clipboard, Share } from 'react-native'
import { ShareDialog } from 'react-native-fbsdk'

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
         finalText:''
      };
    };
    
    share = async () => {
        if (this.state.finalText != '') {
            const content = {
                contentType: 'link',
                contentUrl: "https://www.facebook.com/groups/formigasnacolonia",
                contentDescription: this.state.finalText,
            };
                    ShareDialog.canShow(content).then(
                      function(canShow) {
                        if (canShow) {
                          return ShareDialog.show(content);
                        }
                      }
                    ).then(
                      function(result) {
                        if (result.isCancelled) {
                          console.log('CANCELADO');
                        } else {
                          console.log('SUCESSO, ID: '
                            + result.postId);
                        }
                      },
                      function(error) {
                        console.log('ERRO AO COMPARTILHAR: ' + error);
                      }
                    );
        }
    }

    writeToClipboard = async () => {
        if (this.state.text != "") {
            await this.setState({finalText: this.state.text.toUpperCase()})
        }
        
        await Clipboard.setString(this.state.finalText);
      };

      render() {
        return (
                <View style={{alignContent:'center', paddingTop: 150, paddingStart: 30}}>
                    <View style={{alignContent:'center'}}>
                    <Text>BOTE O TEXTO E VEJA A MAGICA</Text>
                    <ConvertedTextInput value ={this.state.text} onChangeText ={(text) => this.setState({text})} placeholder ={'Texto'}/>
                    <Text> </Text>
                    <Text>A MAGICA:</Text>
                    <ConvertedTextInput editable ={false} value ={this.state.finalText} placeholder ={'TEXTO'} />
                    </View>
                <View style={{width: 300}}>
                    <Button
                        onPress={this.writeToClipboard}
                        title="GERAR E COPIAR"
                        />
                    <Button
                        onPress={this.share}
                        title="COMPARTILHAR"
                        />
                </View>
            </View>   
        );
      }
    }

    
