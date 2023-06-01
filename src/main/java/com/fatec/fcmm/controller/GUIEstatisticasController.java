package com.fatec.fcmm.controller;

import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fatec.fcmm.model.Usuario.Usuario;
import com.fatec.fcmm.services.MantemUsuario;


import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping
public class GUIEstatisticasController {
    Logger logger = LogManager.getLogger(GUIEstatisticasController.class);

    @Autowired
    MantemUsuario service;

    @GetMapping("/crudEstatisticas")
    public ModelAndView exibirUsuarios(){
        ModelAndView mv = new ModelAndView("crudAdminEstatisticas");
        List<Usuario> usuarios = service.consultaTodos();

        //Configurar para o gráfico
        List <String> labels = new ArrayList<>();
        List<Integer> capitulosAtuais= new ArrayList<>();

        for (Usuario usuario : usuarios){
            labels.add(usuario.getNome());
            capitulosAtuais.add(usuario.getCapAtual());
        }

        mv.addObject("labels", labels);
        mv.addObject("capitulosAtuais", capitulosAtuais);

        return mv;
    }
}