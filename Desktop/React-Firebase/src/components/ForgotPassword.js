import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./Auth"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (



    <div className="limiter">
        
    <div className="container-login100" style={{ backgroundImage: `url(https://itsabouttime.run/wp-content/uploads/2013/10/background-51.jpg)` }}>
        <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">
                Password Reset
            </span>
            <form 
                className="login100-form validate-form p-b-33 p-t-5"
                onSubmit={handleSubmit}
            >
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input 
                        className="input100" 
                        name="email" 
                        placeholder="Email" 
                        type="email" 
                        ref={emailRef} 
                        required
                        
                    />
                    <span className="focus-input100" data-placeholder="&#xF002;"></span>
                </div>
                
                {/* <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input 
                        
                        
                        className="input100" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        
                    />
                    <span className="focus-input100" data-placeholder="&#xf11c;"></span>
                </div> */}
                
                <div className="container-login100-form-btn m-t-32">
                    
                    <button 
                        className="login100-form-btn" 
                        type="submit"
                        disabled={loading}
                        >
            
                        Reset Password
                    </button>

                </div>
                <div className="container-login100-form-btn m-t-32 red ">
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                </div>
                {/* <div>
                <Link to="/forgot-password">Forgot Password?</Link>
                </div>     */}
            </form>
        </div>
    </div>
</div>

    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Password Reset</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       {message && <Alert variant="success">{message}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
    //         <Button disabled={loading} className="w-100" type="submit">
    //           Reset Password
    //         </Button>
    //       </Form>
    //       <div className="w-100 text-center mt-3">
    //         <Link to="/login">Login</Link>
    //       </div>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account? <Link to="/signup">Sign Up</Link>
    //   </div>
    // </>
  )
}
