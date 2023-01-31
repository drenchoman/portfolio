#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)
... 
// grain
vec2 uv = gl_FragCoord.xy;

vec3 noiseColors = vec3(snoise2(uv));

gl_FragColor = vec4(noiseColors, 1.0);