import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FormatDate } from '../../format/FormatDate';

interface CustomDatePickerProps {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
    error?: string | null;
}

const CustomDatePicker:React.FC<CustomDatePickerProps> = ({ selectedDate, onDateChange, error }) => {
  const [isVisible, setIsVisible] = useState(false);
  //const [error, setError] = useState<string | null>(null);


  const showDatePicker = () => setIsVisible(true);
  const hideDatePicker = () => setIsVisible(false);
  // const handleConfirm = (date: any) => {
  //   onDateChange(date);
  //   hideDatePicker();
  // };
  const handleConfirm = (date: any) => {
    const currentDate = new Date();
    if (date > currentDate) {
      // setError('Ngày không hợp lệ, hãy chọn một ngày trong quá khứ hoặc hiện tại.');
      onDateChange(date);
      hideDatePicker();
    } else {
      
      onDateChange(date);
      hideDatePicker();
    }
  };
  

  return (
    <View>
      <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
        <Image style={styles.icon} source={require('../../media/icon/birthday-icon.png')} />
        <Text style={styles.dateButtonText}>{FormatDate(selectedDate)}</Text>
      </TouchableOpacity>
      {/* {error && <Text style={styles.errorText}>{error}</Text>} */}
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateButton: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 60,
    paddingLeft: 35,
    backgroundColor:'#F5F5F5',
    margin:9,
    justifyContent:'center'

  },
  dateButtonText: {
   marginLeft:5,
    fontSize: 16,   
  },
  icon: {
    position: 'absolute',
    top: 19,
    start: 10,
    width:20,
    height:20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 35,
  }
});

export default CustomDatePicker;