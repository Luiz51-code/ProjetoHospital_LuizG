import prisma from '../../prisma/prisma.js'

export async function criarUsuario(req, res) {
  const { nome, email, senha, perfil } = req.body

  const usuario = await prisma.usuario.create({
    data: {
      nome,
      email,
      senha,
      perfil
    }
  })

  res.status(201).json(usuario)
}

export async function listarUsuarios(req, res) {
  const usuarios = await prisma.usuario.findMany()

  res.json(usuarios)
}