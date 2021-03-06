package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/content")
public class SampleServlet extends HttpServlet {
    /**
     *
     */
    private static final long serialVersionUID = 1L;
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        ArrayList<String> games = new ArrayList<String>();
        games.add("Red Dead Redemption 2");
        games.add("Oxygen Not Included");
        games.add("Hades");
        games.add("Minecraft");

        Gson gson = new Gson();
        String json = gson.toJson(games);
        
        response.setContentType("application/json");
        response.getWriter().println(json);
    }
}   