import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  calendarWrapper: {
  },
  calendarWrapperAgenda: {
    flex: 1,
  },
  calendar: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0,
    zIndex: 1
  },
  headerTitle: {
    color: '#424242',
    fontSize: 16,
    marginLeft: 0,
    fontFamily: 'Product Sans Bold',
    flex: 1
  },
  headerNavigation: {
    paddingTop:3,
    paddingHorizontal: 0
  },
  weekDays: {
    marginBottom:6,
    marginHorizontal: -10,
    paddingVertical: 5,
    flexDirection: 'row'
  },
  weekDay: {
    color:"#b3b3b3",
    fontFamily: 'Product Sans Bold',
    textAlign: 'center',
    flex: 1
  },
  week: {
    marginHorizontal: -10,
    marginBottom:14,
    flexDirection: 'row'
  },
  day: {
    fontFamily: 'Product Sans Bold',
    flex: 1,
    position: 'relative',
    paddingVertical: 3,
    borderRadius: 100,
  },
  dayTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontFamily: 'Product Sans',
    textAlign: 'center',
  },
  dayDisabled: {
    flex: 1,
    fontFamily: 'Product Sans Bold',
    paddingVertical: 3,
    borderRadius: 100,
  }, 
  dayDisabledText: {
    textAlign: 'center',
    color: '#ccc'
  },
  daySelectedOuter: {
    flex: 1,
    paddingVertical: 0,
  },
  daySelected: {
    
  },
  daySelectedView:{
width: 23,
alignItems:"center",
paddingTop:3,
    height: 23,
    alignContent:"center",
    textAlignVertical:"center",
    borderRadius: 100,
    backgroundColor: '#d9d9d9',
  },
  daySelectedText: {
    textAlign: 'center',
  },
  expander: {
    backgroundColor: '#d9d9d9',
    width: 50,
    height: 4,
    borderRadius: 2,
    margin: 5
  },
  expanderAndroid: {
    borderColor: '#d9d9d9',
    width: 40,
    height: 17,
  },
  expanderAndroidInner: {
    height: 1.5,
    marginVertical: 4,
    marginHorizontal: 6,
    backgroundColor: '#d9d9d9'
  },
  expanderWrapper: {
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayItem: {
    position: 'absolute',
    bottom: -7,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#d9d9d9'
  },
  agendaWrapper: {
    marginTop: 0,
    backgroundColor: '#fff'
  }
})