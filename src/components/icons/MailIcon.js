import React, { useId } from 'react';


export default function MailIcon() {
  const uniqPatternId = useId();
  const uniqImageId = useId();

  return (
    <svg width="18" height="16" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="30" fill={`url(#${uniqPatternId})`} />
      <defs>
        <pattern id={`${uniqPatternId}`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#${uniqImageId}`} transform="matrix(0.0247396 0 0 0.0263889 -0.09375 -0.133333)" />
        </pattern>
        <image id={`${uniqImageId}`} width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVR4nO2YzUrDQBSFg7oSdK/4sxKXutKXUFRw7dJX8BV8BbcutYjgA2SrK92kc86UglbirmALrlRGBiKEkHQmTdoJdA5cKISZnu/eufm5QeDl5eXl5ZVRp9NZB9AiOSSpHMcQwJ0QYjuwNU+y3wDjKhN9KeWaESDJvGpo3BgBGnJsVF4AGNgAZBc9dLvdjWDKarfbKySvs36MCwvIvwBcKKXmJ21cKTVH8lxnO8/LWAApkGeSe5MyT3IHwOMoD5UAEohfAFdCiKW6jMdxvEjykuS36f9LA0gpDwG85WwWCyFOq5qXUh6QfM3Z/4PkWWWAdIYA/NTV5EVNiqTCUsrlIj+lAVLXdgE8VWnyUU0K4IXkvq2f0gBpA3nPC1OTmxIQhuFCWT+lAf4lhFgleWs6AjZHMIqizap+xl4A4BjAe46xHoCjJHo51/Wak7r9lF9gyLBNhZwDmM64bY84Byi6y1R5FeG0ATLfFfc69O9x96ErgLpED+BY9BVwLPoKOBZ9BRyLs1iBoemN0lUA+DQC6EFqgwFaRgA9BW7qcDeKoi2rc6enwHqQWjQdm3LWBzrz1ua9vLy8vGZKf5VAPeZreLlqAAAAAElFTkSuQmCC" />
      </defs>
    </svg>
  )
}
