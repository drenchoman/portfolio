uniform vec3 uLightColor;
uniform vec3 uColor;
uniform float uLightIntensity;

varying vec3 vNormal;
varying vec3 vSurfaceToLight;

vec3 light_reflection(vec3 lightColor) {
  // AMBIENT is just the light's color
  vec3 ambient = lightColor;

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // DIFFUSE  calculations
  // Calculate the cosine of the angle between the vertex's normal
  // vector and the vector going to the light.
  vec3 diffuse = lightColor * dot(vSurfaceToLight, vNormal);

  // Combine 
  return (ambient + diffuse);
}

void main(void) {
  vec3 light_value = light_reflection(uLightColor);
  light_value *= uLightIntensity;

  gl_FragColor = vec4(uColor * light_value, 1.);
}