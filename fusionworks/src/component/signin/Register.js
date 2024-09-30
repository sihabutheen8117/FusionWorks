import React from 'react'
import {Link} from 'react-router-dom'

const register = () => {
  return (
    <div>
      <div>start your carier with together</div>
      <div> Register to FusionWorks</div>

      <div className=''>
        <form>
          <label for="email">email</label>
          <input name="email" type="email" className=""/>

          <label for="password">password</label>
          <input name="password" type="password" className=""/>

          <label for="rePassword">re enter password</label>
          <input name="rePassword" type="password" className=""/>

          <label for="name">your name</label>
          <input name="name" type="text" className=""/>

          <label for="college">college</label>
          <input name="college" type="text" className=""/>

          <div>

            <label for="department">department</label>
            <input name="department" type="text" className=""/>

            <select>
              <option></option>
            </select>

            <label for="section">section</label>
            <input name="section" type="text" className=""/>


          </div>

          <label for="wNumber">whatsapp number</label>
          <input name="wNumber" type='text' className=''/>

        </form>
      </div>
    </div>
  )
}

export default register
