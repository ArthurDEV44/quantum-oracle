#!/bin/bash
set -e

MODEL_NAME="arthurjean/mistral-trismegistus:7b-q6_K"

echo "=== Quantum Oracle - Ollama Setup ==="
echo ""

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo "Ollama not found. Installing..."
    curl -fsSL https://ollama.com/install.sh | sh
else
    echo "Ollama is installed: $(ollama --version)"
fi

# Pull the model from Ollama registry
echo ""
echo "Pulling $MODEL_NAME from Ollama registry..."
ollama pull "$MODEL_NAME"

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Test the model with:"
echo "  ollama run $MODEL_NAME \"What wisdom does the universe hold?\""
echo ""
echo "Start Ollama server (if not running):"
echo "  ollama serve"
echo ""
