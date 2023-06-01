package com.fatec.fcmm.controller;

import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.fcmm.model.Usuario.Usuario;
import com.fatec.fcmm.model.Usuario.UsuarioDTO;
import com.fatec.fcmm.services.MantemUsuarioI;
import com.fatec.fcmm.services.MantemUsuario;

@RestController
@RequestMapping("/sig/api/estatisticas")
public class APIEstatisticasController {
    @Autowired
    MantemUsuario mantemUsuario;
    Usuario usuario;
    Logger logger = LogManager.getLogger(this.getClass());

    @CrossOrigin

    @GetMapping
    public ResponseEntity<List<Usuario>> obterUsuarios() {
        List<Usuario> usuarios = mantemUsuario.consultaTodos();

        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/grafico")
    @ResponseBody
    public Map<Integer, Integer> getUsuariosGrafico() {
        List<Usuario> usuarios = mantemUsuario.consultaTodos();
        Map<Integer, Integer> capituloCounts = new HashMap<>();

        for (Usuario usuario : usuarios) {
            Integer capitulo = usuario.getCapAtual();
            capituloCounts.put(capitulo, capituloCounts.getOrDefault(capitulo, 0) + 1);
        }

        return capituloCounts;
    }

}
