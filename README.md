# 2d-to-3d

## Steps:
1. Collect data using javascript-based bot (DataCollectionBotJS).
2. Preprocess the data(convert to grayscale and remove background) using Preprocessor Python Script (PreprocessorPython).
3. Train the GAN models to synthesize novel views from a single perspective (perspectiveImageGAN).
4. Create the 3D object using Pytorch3D based differential renderer (3DGen).
