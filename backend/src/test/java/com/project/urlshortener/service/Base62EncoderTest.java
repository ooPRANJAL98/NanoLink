package com.project.urlshortener.service;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class Base62EncoderTest {

    @Test
    public void shouldEncode125as00021(){

      Base62Encoder encoder = new Base62Encoder(); //creates object of the class to use it

      String code = encoder.encode(125);
        assertNotNull(code);
        assertFalse(code.isEmpty());
        assertEquals("00021", code);
    }


    @Test
    public void shouldDecode00021as125(){
        Base62Encoder decoder = new Base62Encoder();

        String code = decoder.decode("00021");
        assertNotNull(code);
        assertEquals("00021", code);
    }

}
