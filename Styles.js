import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    backgroundColor: "#7cabf2",
    width: "100%",
    height: "10%",
    minHeight: 100,
    justifyContent: 'center',
    padding: 10,
  },
  tittle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginTop: 20,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
    paddingBottom: 20,  // Adiciona espaçamento inferior
  },
  button: {
    backgroundColor: '#0e58cf',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  textButton: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
  },
  main: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
