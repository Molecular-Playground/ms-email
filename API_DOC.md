# MS-EMAIL Endpoints v0.0.0

Each section in this document contains all valid HTTP verbs that can
be called.  Section headers are the route.

# /validate

### #PUT
Sends an account validation email to a (new) user.

Params (must be raw JSON in request.Body):
       
       {
        "email": "email_of_user_to_validate",
        "link": "full_url_with_validation_key_to_validate_user"
        }
        
Returns: "Message sent: `mailer_success_response_msg`" OR `descriptive_error_msg`.

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
        
Returns: "Message sent: `mailer_success_response_msg`" OR `descriptive_error_msg`.

This is an unauthenticated endpoint.