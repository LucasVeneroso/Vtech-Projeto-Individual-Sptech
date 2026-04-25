#!/bin/bash
cd /home/lucasveneroso/Sptech/Pi/Vtech-Projeto-Individual-Sptech/
git add .
read -p "commit: " comentario
git commit -m "$comentario" 
git push
