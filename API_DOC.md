# MS-EMAIL Endpoints v0.0.0

Each section in this document contains all valid HTTP verbs that can
be called.  Section headers are the route.

# /validate

### #PUT
Sends an account validation email to a (new) user.

Params (must be raw JSON in request.Body):
       
       {
        "email": "email_of_user_to_validate",
        "key": "validation_key_from_user_db_object"
        }
        
Returns: "Message sent: `mailer_success_response_msg`" OR `false`.

This is an unauthenticated endpoint.

# /general

### #PUT
Sends an email to an address. Request params form the email.

Params (must be raw JSON in request.Body): 

        {
         "email": "to_email_address",
         "subject": "your_subject",
         "html": "html_formatted_email_body"
         "text": "plaintext_email_body_as_fallback"
        }
        
Returns: "Message sent: `mailer_success_response_msg`" OR `false`.

This is an unauthenticated endpoint.