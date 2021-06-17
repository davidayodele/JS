function twilio_sms(country_code, destination_phone, msg_body) {
    // Get SID & AUTH code from https://www.twilio.com/user/account
    var acct_sid = "000";  
    var acct_auth = "000";
    var twilio_phone = '+1605555555'  //Provided by Twilio
  
    var api_url = "https://api.twilio.com/2010-04-01/Accounts/" + acct_sid + "/SMS/Messages.json";
  
    var api_data = {
      "To" : '+' + country_code + destination_phone,
      "Body" : msg_body,
      "From" : twilio_phone
    };
  
    var api_options = {
      "method" : "post",
      "payload" : api_data
    };
  
    api_options.headers = {
      "Authorization" : "Basic " + Utilities.base64Encode(acct_sid + ":" + acct_auth)
    }; 
  
    var api_response = UrlFetchApp.fetch(api_url, api_options);  // send request to Twilio API
    
    Logger.log(api_response);
  }
  
  function myFunction() {
    var my_app = SpreadsheetApp;
    var my_book = my_app.getActiveSpreadsheet();
    var my_sheet = my_book.getSheetByName("Form Responses 1");
    //var my_sheet2 = my_book.getSheetByName("Pivot Table 1");
    var my_sheet2 = my_book.getSheetByName("Station 1");
    var my_sheet3 = my_book.getSheetByName("Station 2");
    var my_sheet4 = my_book.getSheetByName("Station 3");
    var line_num = 1
    var row_accumulator
    var place_in_line = 1
    var daily_remaining
  
    // Google limits the number of emails you can send in 24 hours
    var email_count = 0
    var email_address = ""
    var destination_phone = ""
    var email_subject = "RENEWAL CONFIRMATION"
    var email_msg = "Thank you for signing in. Please review the documents you need here: https://google.com  Your number in line is: "
    var email_sender = MailApp
    var last_row
  
    var up_msg = "Hello patron, your number in line is up. Please see us now. Thank you!"
    var next_msg = "Hello patron, your number in line will be called soon. Please be present and ready. If driving, please park in the Walmart lot across the street. Thank you!"
  
    last_row = my_sheet.getLastRow()
    my_sheet.getRange(1, 15).setValue("Emails Sent");
    //var pivot_table_value = my_sheet2.getRange("B7").getValue();
    
    for (row_accumulator = 2; row_accumulator <= last_row; row_accumulator++) { 
      email_address = my_sheet.getRange(row_accumulator, 6).getValue().toString()
      destination_phone = my_sheet.getRange(row_accumulator, 12).getValue().toString()
      country_code = my_sheet.getRange(row_accumulator, 11).getValue().toString()
  
      Logger.log('+' + country_code + destination_phone)
      if (my_sheet.getRange(row_accumulator, 16).getValue() != "sent") {
        daily_remaining = MailApp.getRemainingDailyQuota()
  
        try {
          email_sender.sendEmail(my_sheet.getRange(row_accumulator, 6).getValue(), email_subject, email_msg + line_num);
        } catch (e) {
          // Logs an ERROR message.
          Logger.log('Error: ' + e);
        }
        
        my_sheet.getRange(row_accumulator, 16).setValue("sent");
        twilio_sms(country_code, destination_phone, email_msg + line_num)
        my_sheet.getRange(row_accumulator, 16).setValue("sent");
        my_sheet.getRange(row_accumulator, 15).setValue(daily_remaining);      
      }      
      
      line_num = line_num + 1
      place_in_line = place_in_line + 1
      email_count++
  
    }
  
    for (row = 2; row <= last_row; row++) { 
      email_address = my_sheet.getRange(row, 6).getValue().toString()
      destination_phone = my_sheet.getRange(row, 8).getValue()
      country_code = my_sheet.getRange(row, 14).getValue()
  
      var timestamp =  my_sheet.getRange(row, 1).getValue().toString()
      var first_name = my_sheet.getRange(row, 3).getValue().toString()
      var last_name = my_sheet.getRange(row, 5).getValue().toString()
      var group_size = my_sheet.getRange(row, 9).getValue()
  
      // ======= Station 1 =======
      if (my_sheet2.getRange(row - 1, 1).isBlank()) {
        my_sheet2.getRange(row - 1, 1).setValue(timestamp)
        my_sheet2.getRange(row - 1, 2).setValue(row + 1)
        my_sheet2.getRange(row - 1, 3).setValue(first_name)
        my_sheet2.getRange(row - 1, 4).setValue(last_name)
        my_sheet2.getRange(row - 1, 5).setValue(group_size)
      }
  
      if (my_sheet2.getRange(row - 1, 6).getValue().toString().toLowerCase() == "next") {
        for (next = 0; next <= 10; next++) {
          email_address = my_sheet.getRange(row - 1 + next, 6).getValue().toString()
          destination_phone = my_sheet.getRange(row - 1 + next, 8).getValue()
          country_code = my_sheet.getRange(row - 1 + next, 14).getValue()
          if (my_sheet2.getRange(row - 1 + next, 1).getValue.isBlank() == false){
            twilio_sms(country_code, destination_phone, next_msg)
          }
        }
      }
  
      if (my_sheet2.getRange(row - 1, 6).getValue().toString().toLowerCase() == "up") {
        twilio_sms(country_code, destination_phone, up_msg)
      }
  
      // ======= Station 2 =======
      if (my_sheet3.getRange(row - 1, 1).isBlank()) {
        my_sheet3.getRange(row - 1, 1).setValue(timestamp)
        my_sheet3.getRange(row - 1, 2).setValue(row + 1)
        my_sheet3.getRange(row - 1, 3).setValue(first_name)
        my_sheet3.getRange(row - 1, 4).setValue(last_name)
        my_sheet3.getRange(row - 1, 5).setValue(group_size)
      }
  
      if (my_sheet3.getRange(row - 1, 6).getValue().toString().toLowerCase() == "next") {
        for (next = 0; next <= 10; next++) {
          email_address = my_sheet.getRange(row - 1 + next, 6).getValue().toString()
          destination_phone = my_sheet.getRange(row - 1 + next, 8).getValue()
          country_code = my_sheet.getRange(row - 1 + next, 14).getValue()
          if (my_sheet3.getRange(row - 1 + next, 1).getValue.isBlank() == false){
            twilio_sms(country_code, destination_phone, next_msg)
          }
        }
      }
  
      if (my_sheet3.getRange(row - 1, 6).getValue().toString().toLowerCase() == "up") {
        twilio_sms(country_code, destination_phone, up_msg)
      }
  
  
      // ======= Station 3 =======
      if (my_sheet4.getRange(row - 1, 1).isBlank()) {
        my_sheet4.getRange(row - 1, 1).setValue(timestamp)
        my_sheet4.getRange(row - 1, 2).setValue(row + 1)
        my_sheet4.getRange(row - 1, 3).setValue(first_name)
        my_sheet4.getRange(row - 1, 4).setValue(last_name)
        my_sheet4.getRange(row - 1, 5).setValue(group_size)
      }
  
      if (my_sheet4.getRange(row - 1, 6).getValue().toString().toLowerCase() == "next") {
        for (next = 0; next <= 10; next++) {
          email_address = my_sheet.getRange(row - 1 + next, 6).getValue().toString()
          destination_phone = my_sheet.getRange(row - 1 + next, 8).getValue()
          country_code = my_sheet.getRange(row - 1 + next, 14).getValue()
          if (my_sheet4.getRange(row - 1 + next, 1).getValue.isBlank() == false){
            twilio_sms(country_code, destination_phone, next_msg)
          }
        }
      }
  
      if (my_sheet4.getRange(row - 1, 6).getValue().toString().toLowerCase() == "up") {
        twilio_sms(country_code, destination_phone, up_msg)
      }      
  
    }
  
    Logger.log("People in line: " + line_num + " time(s)");
  
  }
  