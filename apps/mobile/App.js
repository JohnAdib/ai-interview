import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const api = process.env.EXPO_PUBLIC_API_URL || "http://localhost:4100";
export default function App() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`${api}/entries`).then(response => { if (!response.ok) throw new Error(); return response.json(); }).then(setEntries).catch(() => setError("Could not load the list. Check the API address."));
  }, []);
  return <SafeAreaView style={styles.screen}><StatusBar style="dark"/><ScrollView contentContainerStyle={styles.content}><Text style={styles.kicker}>A SMALL SHARED COLLECTION</Text><Text style={styles.heading}>Reading Room</Text><Text style={styles.subtitle}>Books to return to.</Text>{!!error && <Text accessibilityRole="alert">{error}</Text>}{entries.map(entry => <View key={entry.id} style={styles.row}><Text style={styles.title}>{entry.title}</Text><Text>{entry.author}</Text><Text>{entry.read ? "Read" : "To read"}</Text></View>)}</ScrollView></SafeAreaView>;
}
const styles = StyleSheet.create({screen:{flex:1,backgroundColor:"#f5f1e8"},content:{padding:24,paddingTop:60},kicker:{fontSize:11,letterSpacing:2,color:"#50705b"},heading:{fontSize:36,fontWeight:"bold",marginTop:10,color:"#28362e"},subtitle:{marginBottom:24},row:{paddingVertical:16,borderBottomWidth:1,borderBottomColor:"#cbd2c7",gap:4},title:{fontSize:18,fontWeight:"600"}});
