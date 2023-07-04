# User-Notes
user can create one or many notes and edit them (Update, Delete)
# Structure

**=>API**: has all roots in the project (endpoints)
- User-routes
- Notes-routes
<br>

**=>Config**: has Connection of Database
<br>
<br>

**=>Middleware**: Check all request has come 
   - Authentication=> Before doing any action in your notes we Check the token if it's the same token login
   - Validation=>Check if the Date is Valid or not
<br>

**=>Models**: All collection in the project we have 2 collection
   - User-Model
   - Notes-Model
<br>

**=>Services**: all Services of endpoints
   - login=>
     - sign in
     - signup 
   - Notes-Model
     - Add Notes
     - Delete Notes
     - Update Notes
     - Get all Notes
     - Get all Notes of any User
      

