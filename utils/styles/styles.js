import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const textStyles = StyleSheet.create({
  h2: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 40,
    textAlign: "center",
  },
  h3: {
    paddingTop: 4,
    color: "white",
    fontSize: 16,
    paddingBottom: 10,
    fontFamily: "monospace",
  },
  p:{
    color: "white",
    fontSize: 16,
    paddingBottom: 10,
    fontFamily: "monospace",
    
  }
});

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 21,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 8,
    alignSelf: "center",
    marginRight: 8,
    marginLeft: 8,

  },
  buttonText: {
    color: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  absoluteButton: {
    position: 'absolute',
    bottom: 0, 
    left: 0,  
    right: 0,
   
  },
  uselessButton:{



  }
});

