const LovableLogo = ({ className = "h-6 w-auto" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 755 129"
    className={className}
  >
    <path
      fill="#FCFBF8"
      d="M303.603 30.94q13.724 0 24.04 5.945 10.314 5.944 15.91 16.959 5.682 10.928 5.682 25.7 0 14.775-5.682 25.79-5.596 11.014-15.91 16.959-10.316 5.944-24.04 5.944-13.725 0-24.128-5.944-10.316-5.945-15.998-16.959-5.595-11.015-5.595-25.79 0-14.772 5.595-25.7 5.682-11.014 15.998-16.96 10.403-5.943 24.128-5.944m176.168 0q13.025 0 22.029 4.284 9.003 4.195 13.55 12.063 4.632 7.868 4.633 18.796v38.464q0 6.207.874 11.539.962 5.246 2.71 6.644v2.972H496.03q-.961-3.759-1.486-8.479-.173-1.56-.298-3.178a33 33 0 0 1-2.149 2.828q-4.371 5.157-11.278 8.305-6.818 3.059-15.56 3.059-8.655 0-15.561-3.409-6.819-3.41-10.753-9.703-3.846-6.381-3.846-14.861 0-12.939 7.605-19.757 7.606-6.906 21.942-9.004l15.999-2.273q4.808-.7 7.605-1.749t4.108-2.797q1.312-1.836 1.312-4.633 0-2.885-1.573-5.245-1.487-2.448-4.546-3.847-2.972-1.486-7.256-1.486-6.82 0-10.928 3.585-4.109 3.496-4.458 9.615h-27.362q.35-9.267 5.595-16.435 5.332-7.256 14.773-11.277t21.856-4.02Zm78.465 15.936a31.3 31.3 0 0 1 3.148-4.92q4.196-5.334 10.227-8.132 6.033-2.884 13.55-2.884 11.278 0 19.582 5.857 8.306 5.858 12.764 16.872 4.458 10.928 4.458 25.964 0 14.948-4.546 25.963-4.546 10.927-13.025 16.784-8.392 5.857-19.669 5.857-7.518 0-13.463-2.622-5.857-2.622-9.966-7.868a31.2 31.2 0 0 1-3.321-5.4v13.355h-26.227V.342h26.488zM710.451 30.94q12.85 0 22.817 5.595 9.966 5.595 15.473 16.26 5.595 10.665 5.595 25.526 0 5.333-.088 8.48h-63.814q.377 6.135 2.359 10.665 2.448 5.595 6.993 8.479 4.546 2.798 10.753 2.798 6.819 0 11.277-3.497 4.459-3.584 5.595-10.053h26.487q-1.223 10.141-6.905 17.572-5.595 7.43-14.949 11.452-9.354 4.02-21.768 4.02-13.986 0-24.302-5.332-10.316-5.42-16.085-16.259-5.682-10.84-5.682-26.838 0-15.21 5.944-26.226 5.944-11.102 16.435-16.872t23.865-5.77m-502.536 69.546h32.087c23.362 0 20.196 25.163 20.189 25.216h-79.726V.342h27.45zm185.126-2.03 19.101-64.981h27.362l-31.908 92.227h-29.46l-33.132-92.227h28.148zm263.245 27.246h-26.488V.342h26.488zM493.845 80.731a14 14 0 0 1-3.06 1.961q-3.06 1.486-8.305 2.536l-6.731 1.311q-6.731 1.311-10.141 4.02-3.322 2.711-3.322 7.606c0 4.895 1.195 5.857 3.584 7.78q3.585 2.886 9.18 2.886t9.878-2.448q4.283-2.535 6.556-6.993 2.361-4.458 2.361-10.141zm82.662-29.597q-5.858 0-10.053 3.584-4.109 3.496-6.207 9.966-2.098 6.381-2.098 14.949 0 8.655 2.098 15.036c2.098 6.381 3.468 7.547 6.207 9.878q4.195 3.497 10.053 3.497 5.945 0 9.966-3.497 4.108-3.497 6.119-9.878 2.097-6.382 2.098-15.036t-2.098-15.036q-2.011-6.382-6.119-9.88-4.021-3.583-9.966-3.583m-272.904.088q-5.77 0-9.966 3.234-4.109 3.147-6.295 9.528-2.185 6.294-2.185 15.56t2.185 15.65q2.186 6.38 6.295 9.616 4.196 3.146 9.966 3.146t9.877-3.146q4.11-3.236 6.294-9.53 2.186-6.382 2.186-15.735 0-13.9-4.808-21.068-4.808-7.255-13.549-7.255m406.237-1.137q-5.857 0-10.316 2.885-4.371 2.797-6.819 8.392-1.34 3.175-1.918 7.081h36.494q-.391-4.95-1.969-8.567-2.01-4.896-5.944-7.344-3.934-2.447-9.528-2.447"
    />
    <mask
      id="lovable-logo-mask"
      width="124"
      height="126"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" as const }}
    >
      <path
        fill="url(#lovable-logo-grad)"
        fillRule="evenodd"
        d="M37.3.343c20.43 0 36.991 16.605 36.991 37.088v14.095h12.31c20.43 0 36.991 16.605 36.991 37.088s-16.561 37.088-36.99 37.088H.31V37.431C.31 16.948 16.87.343 37.3.343"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#lovable-logo-mask)">
      <g filter="url(#lovable-blur-1)">
        <circle cx="54.389" cy="67.257" r="83.452" fill="#4B73FF" />
      </g>
      <g filter="url(#lovable-blur-2)">
        <ellipse cx="63.557" cy="21.462" fill="#FF66F4" rx="106.879" ry="83.452" />
      </g>
      <g filter="url(#lovable-blur-3)">
        <ellipse cx="80.992" cy="5.757" fill="#FF0105" rx="83.452" ry="73.289" />
      </g>
      <g filter="url(#lovable-blur-4)">
        <circle cx="65.043" cy="21.442" r="50.188" fill="#FE7B02" />
      </g>
    </g>
    <defs>
      <filter id="lovable-blur-1" width="241.704" height="241.704" x="-66.463" y="-53.596" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur1" stdDeviation="18.7" />
      </filter>
      <filter id="lovable-blur-2" width="288.559" height="241.704" x="-80.723" y="-99.39" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur2" stdDeviation="18.7" />
      </filter>
      <filter id="lovable-blur-3" width="241.704" height="221.378" x="-39.86" y="-104.931" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur3" stdDeviation="18.7" />
      </filter>
      <filter id="lovable-blur-4" width="175.176" height="175.176" x="-22.545" y="-66.146" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="blur4" stdDeviation="18.7" />
      </filter>
      <linearGradient id="lovable-logo-grad" x1="41.797" x2="79.356" y1="22.372" y2="125.655" gradientUnits="userSpaceOnUse">
        <stop offset="0.025" stopColor="#FF8E63" />
        <stop offset="0.56" stopColor="#FF7EB0" />
        <stop offset="0.95" stopColor="#4B73FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default LovableLogo;
