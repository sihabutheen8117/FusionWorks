import React from 'react'

const HomeFooter = () => {
  return (
    <div id="contact">
      {/* contact */}

      <div className='bg-slate-900'>

        <div className='m-5 text-white font-semibold text-opacity-60'>

          <div>india , chennai</div>

          <div className='mt-1'>
            <a href="mailto:220701278@rajalakshmi.edu.in" target="_blank" class="flex items-center">
              <i class="fa fa-envelope text-white text-opacity-100"></i>
              <span class="ml-2">mail to me</span>
            </a>
          </div>

          <div>
            <a href="https://github.com/sihabutheen8117" target="_blank" class="flex items-center">
              <i class="fab fa-github text-white text-opacity-100"></i>
              <span class="ml-2">GitHub</span>
            </a>
          </div>

          <div className='mt-1'>
            <a href="https://www.linkedin.com/in/sihabutheen-haq/" target="_blank" class="flex items-center">
              <i class="fab fa-linkedin text-white text-opacity-100"></i>
              <span class="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* copy write */}
        <div className='mt-5 text-center text-white text-opacity-30'>
          &copy; 2024 FusionWorks All rights reserved.
        </div>
      </div>

    </div>
  )
}

export default HomeFooter
